import React from "react";

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { AiFillGithub } from "react-icons/ai";
import { CgLivePhoto } from "react-icons/cg";
import { projects } from "../../constants/constants";

const Projects = () => (
    <Section id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({ id, image, title, description, source, visit, tags }) => (
                    <BlogCard key={id}>
                        <Img src={image} />
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo>
                            {description.length > 126
                                ? description.substr(0, 125) + "..."
                                : description}
                        </CardInfo>
                        <UtilityList>
                            <ExternalLinks target="_blank" github href={source}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <AiFillGithub
                                        style={{ marginRight: "10px" }}
                                        size={"2.5rem"}
                                    />
                                    Code
                                </div>
                            </ExternalLinks>
                            <ExternalLinks target="_blank" href={visit}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <CgLivePhoto
                                        style={{ marginRight: "10px" }}
                                        size={"2.5rem"}
                                    />
                                    Live Demo
                                </div>
                            </ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
