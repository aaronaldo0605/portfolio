import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "your_api_key_here") {
      return NextResponse.json({ error: "Missing Gemini API Key." }, { status: 500 });
    }

    const systemPrompt = `You are the personal AI Assistant for Aaron Rodrigues. You are embedded on his portfolio website and will chat with recruiters and visitors. 
Always be polite, professional, concise, and helpful. Only answer questions related to Aaron's professional background. If a question is entirely irrelevant, politely decline to answer and offer to discuss his technical skills instead.

Aaron's Resume Data:
Name: Aaron Rodrigues
Location: Tampa, FL | Open to relocation
Email: aaronrod0605@gmail.com
Phone: +1 (813)-940-0213
LinkedIn: linkedin.com/in/aaronrod0605/

Summary: Business & Data Analyst with 3+ years across banking and fintech, specializing in BI reporting, ETL optimization, and advanced analytics. Skilled in SQL, Power BI, Python, and Snowflake.

Education:
1. M.S. in Artificial Intelligence and Business Analytics, University of South Florida (Aug 2024 - May 2026). GPA: 4.0/4.0.
2. B.E. in Computer Engineering, University of Mumbai (Aug 2018 - May 2022). GPA: 3.9/4.0.

Professional Experience:
1. Business Analyst Intern | BMO Bank N.A. | Jacksonville, FL (May 2025 - Present)
- Gathered stakeholder requirements and designed 12 SharePoint sites to centralize resources, improving training efficiency by 40%.
- Analyzed manual workflows and automated 5+ processes using Power Apps and Power Automate, saving 25+ hours per month.
- Translated business needs into Power BI dashboards using advanced DAX to track KPIs across 5+ teams, improving visibility by 35%.
- Queried and consolidated 800+ operational records using SQL into a centralized SharePoint repository, reducing lookup time by 30%.

2. Data Analyst | Travelex | Mumbai, India (May 2022 - Aug 2024)
- Created 55+ BI reports with Power BI, SQL, and Excel to support business performance monitoring and stakeholder decision-making.
- Redesigned and automated an ETL pipeline, reducing runtime from 75 hours to 70 seconds and improving efficiency by 3800x.
- Automated data validation pipelines for BI reports using SQL and Python.
- Built Risk Case Manager (RCM) reporting dashboards for stakeholder case analytics, eliminating $150,000+ in licensing costs.
- Optimized Amazon S3 storage architecture, reducing cloud infrastructure costs by $60,000+.
- Validated AML compliance data across 17 countries using NICE Actimize, Persona, and ThetaRay.
- Analyzed and optimized fraud detection and AML monitoring rules to reduce alert volume by 50% and false positives by 60%.

3. Business Analyst Intern | 3folks Media | Mumbai, India (Aug 2020 - May 2022)
- Evaluated campaign KPIs for 120+ interns using SQL to identify performance gaps, improving operational efficiency by 60%.
- Tracked delivery metrics using Jira and implemented agile practices, reducing delivery time by 35% and improving productivity by 50%.

4. Software Developer Intern | KubixSquare | Mumbai, India (Aug 2021 - Nov 2021)
- Developed 3 application modules for KubixSquare Application Architecture using Python, MySQL, Django, and Docker.
- Improved database queries, reducing load time by 12% and improving user responsiveness.

Skills:
- Programming & Scripting: Python (Pandas, NumPy, Scikit-learn), SQL (MySQL, PostgreSQL, Oracle, SQL Server), R, PySpark, SAS
- Data Analytics & Visualization: Power BI (DAX, Power Query), Tableau, Streamlit, Excel (Power Pivot, Advanced Formulas), Alteryx
- Cloud & DevOps Tools: AWS (S3, Glue, Redshift), Snowflake, dbt, Git, GitHub, Docker
- BI & Automation Tools: Power Apps, Power Automate, SharePoint, Microsoft Office Suite
- AML & Compliance: NICE Actimize, ThetaRay, Refinitiv, Persona, Norkom

Projects:
1. Deep Learning Glaucoma Detection: Achieved 94.52% accuracy using VGG19+LSTM model.
2. ML-Based Business Analytics (The Sparks Foundation): Performed EDA on 10K+ records, improving model accuracy by 12%.
3. ERP Management System: Python-MySQL college ERP managing 800+ records. Best Project of Sophomore Year.
4. Cloud-Based Natural Disaster Prediction: Increased prediction accuracy by 20% with Random Forest Regression.
5. Food Sales Forecasting: Authored survey publication on using ML techniques for food sales forecasting.

Certifications: SnowPro Associate, Machine Learning Specialization (Coursera).
Leadership: President, USF Bridges International (Feb 2025 - Present) - Led initiatives for 150+ participants.

Instructions for your responses:
- Answer any questions accurately based on this information. 
- Keep answers under 3 short paragraphs. 
- Be enthusiastic but highly professional. 
- Never makeup or hallucinate answers about his background. If asked about something not in this resume, politely say you don't have that information.
`;

    // Map the conversation history into Gemini's format
    // Since v1 doesn't support a separate systemInstruction field, we prepend it to the first user message
    const contents = messages.map((msg: any, index: number) => {
      const isFirstUserMessage = index === 0;
      return {
        role: msg.role === "user" ? "user" : "model",
        parts: [{ 
          text: isFirstUserMessage 
            ? `${systemPrompt}\n\n[USER INQUIRY]: ${msg.content}` 
            : msg.content 
        }]
      };
    });

    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;
    
    const payload = {
      contents: contents
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error?.message || JSON.stringify(data.error) || "Failed to fetch from Gemini API");
    }

    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that request at the moment.";

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
