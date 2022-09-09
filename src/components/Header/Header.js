import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import {
    Container,
    Div1,
    Div2,
    Div3,
    NavLink,
    SocialIcons,
    Span,
} from "./HeaderStyles";

const Header = () => (
    <Container>
        <Div1>
            <Link href={"/"}>
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    {/* <AiFillInstagram
                        style={{
                            marginLeft: "10px",
                        }}
                        size={"2.5rem"}
                    /> */}
                    <Span>IBRAGIMOOV</Span>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href={"#projects"}>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href={"#technologies"}>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href={"#about"}>
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="https://github.com/ibragimoov">
                <AiFillGithub size={"4rem"} />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
