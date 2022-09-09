import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Hi, I'm Eldar
                <br />A Frontend Developer
            </SectionTitle>
            <SectionText>
                every day I study something new in the field of it
            </SectionText>
            <a href="https://vk.com/eldar__ibragimov" target="_blank">
                <Button>Learn more</Button>
            </a>
        </LeftSection>
    </Section>
);

export default Hero;
