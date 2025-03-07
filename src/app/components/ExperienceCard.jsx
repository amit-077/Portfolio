import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({experience, lightMode}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: lightMode ? "#fdfdfd":"#333",
                color: lightMode ? "#333" : "#f1f1f1",
                padding: "20px",
                borderRadius: "8px",
                visibility: "visible",
                boxShadow: "0 3px 0 #5580e9",
            }}
            contentArrowStyle={{ borderRight: lightMode ? "7px solid  #fff": "7px solid  #333" }}
            date={experience.date}
            iconStyle={{
                background: experience.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                visibility: "visible",
                color: "#333"
            }}
            icon={
                <div
                style={{
                    display: "flex",
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    visibility: "visible",
                }}
                >
                <img
                    src={experience.icon}
                    alt={experience.companyName}
                    style={{
                    height: "60%",
                    width: "60%",
                    objectFit: "contain",
                    visibility: "visible"
                    }}
                />
                </div>
            }
            >
            <div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", color: lightMode ? "#111": "#f1f1f1" }}>
                {experience.title}
                </h3>
                <p
                style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: lightMode ? "#777": "#f1f1f1",
                    margin: 0,
                }}
                >
                {experience.companyName}
                </p>
            </div>

            <ul style={{ marginLeft: "20px", marginTop: "20px", listStyleType: "disc" }}>
                {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    style={{
                    color: lightMode ? "#333": "#f1f1f1",
                    paddingLeft: "4px",
                    fontSize: "14px",
                    letterSpacing: "0.05em",
                    }}
                >
                    {point}
                </li>
                ))}
            </ul>
        </VerticalTimelineElement>
      );
}

export default ExperienceCard