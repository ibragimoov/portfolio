import React from "react";
import {
    DiFirebase,
    DiNodejsSmall,
    DiMongodb,
    DiReact,
    DiZend,
} from "react-icons/di";
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle,
} from "./TechnologiesStyles";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiMysql,
    SiExpress,
    SiTypescript,
} from "react-icons/si";

const Technologies = () => (
    <Section id="technologies">
        <SectionDivider />
        <br />
        <SectionTitle>Technologies</SectionTitle>
        <List>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiHtml5 size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>HTML5</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiCss3 size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>CSS3</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiTailwindcss size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Tailwind</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiJavascript size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Javascript</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <DiReact size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>React</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiRedux size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Redux Toolkit</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <DiNodejsSmall size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Node.js</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiMysql size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Mysql</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <DiMongodb size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Mongodb</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>
                        <SiTypescript size={"10rem"} />
                    </ListTitle>
                    <ListParagraph>Typescript</ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default Technologies;
