import React from "react";
import "../App/App.css";
import Thumbnail from "../Thumbnail/Thumbnail";

//This component is simple enough to just have a render() method,
//so it can be a funcional component (simply return the JSX code to render)

function Experience() {
  return (
    // Render a Thumbnail component
    <div className="thumbnail-rail">
      <h5>Professional Experience</h5>
      <Thumbnail
        title="Java Consultant (outsourcing in BNP Paribas)"
        category="Closer Consulting"
        time_interval="June 2014 - September 2016"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>
              Maintenance and development of Web applications (banking business)
            </li>
            <li>Analysis and writing of technical specifications documents</li>
            <li>
              Design and execution of tests (Development Control and System
              Integration Testing phases)
            </li>
          </ul>
        }
        technologies={[
          "Apache Tomcat",
          "Java",
          "JSP",
          "SweetDev 2.X",
          "JavaScript",
          "Oracle SQL"
        ]}
      />
      <Thumbnail
        title="Software Developer"
        category="Psiengine"
        time_interval="January 2011 - June 2014"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>
              Maintenance and development of Web applications (insurance
              business)
            </li>
            <li>
              User interface maintenance and development of communication
              structures with DLL’s for a Web-based Air Handling Unit design and
              simulation software (HVAC industry)
            </li>
          </ul>
        }
        technologies={[
          "WebSphere Application Server",
          "Java",
          "JSP",
          "SEA",
          "JavaScript",
          "DB2",
          "GWT"
        ]}
      />
      <Thumbnail
        title="Software Developer Intern (for BSc completion)"
        category="Evolve Space Solutions"
        time_interval="April 2010 - September 2010"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>Development of a graphical engine for Android 2.X platforms</li>
            <li>Internship grade: 16 out of 20</li>
          </ul>
        }
        technologies={["Android SDK", "Java", "OpenGL|ES", "Blender 3D"]}
      />

      <h5>Professional Training</h5>
      <Thumbnail
        title="Training in ExtJS 4.2.x/5.0"
        category="Closer Consulting"
        time_interval="October 2014 - December 2014"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>Basic training in ExtJS 4.2.x/5.0.</li>
          </ul>
        }
        technologies={["ExtJS 4.2.x/5.0", "HTML", "JavaScript"]}
      />

      <h5>Education</h5>
      <Thumbnail
        title="MSc in Data Science"
        category="University of Lisbon - Faculty of Sciences"
        time_interval="September 2017 - November 2019"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>Average grade: 18 out of 20</li>
            <li>
              Dissertation: "Biclustering Electronic Health Records to Unravel
              Disease Presentation Patterns"
              <ul>
                <li>Grade: 17 out of 20</li>
                <li>Work comprised in the NEUROCLINOMICS2 project</li>
                <li>
                  Exploratory analysis of phenotype-genotype and risk factor
                  data from Portuguese Amyotrophic Lateral Sclerosis patients
                </li>
                <li>
                  Definition of clinically relevant questions based on the
                  exploratory analysis
                </li>
                <li>
                  Utilization of Biclustering techniques (combined with
                  Classification and Association Rule Mining) on the
                  aforementioned data to identify disease presentation patterns
                  between patients/controls and patients categorized in distinct
                  disease progression groups
                </li>
              </ul>
            </li>
          </ul>
        }
        technologies={[
          "Python",
          "Scikit-learn",
          "Pandas",
          "Numpy",
          "Scipy",
          "Matplotlib",
          "R",
          "Java",
          "KNIME",
          "SQL",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "GCP",
          "Apache Spark",
          "PySpark",
          "Jupyter",
          "LaTeX"
        ]}
      />

      <Thumbnail
        title="MSc in Bioinformatics and Computational Biology"
        category="University of Lisbon - Faculty of Sciences"
        time_interval="September 2016 - June 2017"
        location="Lisbon, Portugal"
        description={
          <ul>
            <li>Concluded only the curricular part of the MSc (first year)</li>
            <li>Average grade (first year): 16 out of 20</li>
          </ul>
        }
        technologies={["Python", "SQL", "SQL Server", "SPSS", "CLI"]}
      />

      <Thumbnail
        title="BSc in Computer Engineering"
        category="New University of Lisbon - Faculty of Sciences and Technology"
        time_interval="September 2006 - October 2010"
        location="Monte da Caparica, Portugal"
        description={
          <ul>
            <li>Average grade: 14 out of 20</li>
          </ul>
        }
        technologies={["Java", "C", "C++", "C#", "Oracle", "Eclipse"]}
      />
    </div>
  );
}

export default Experience;
