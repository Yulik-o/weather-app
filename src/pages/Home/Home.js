import React from "react";
import s from "./Home.module.scss";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div className={s.home}>
      <Container maxWidth="sm">
        <b>Your weather forecast</b> <p>story begins here:</p>
      </Container>
    </div>
  );
}
