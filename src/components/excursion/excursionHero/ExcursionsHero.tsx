"use client";

import { Box, Typography, Container } from "@mui/material";
import styles from "./ExcursionsHero.module.scss";

export default function ExcursionsHero() {
  return (
    <Box component="section" className={styles.hero}>
      <Box
        className={styles.heroBg}
        style={{
          backgroundImage: "url(/images/excursions/escursioni2.jpeg)",
        }}
      />
      <Box className={styles.heroOverlay} />
      <Box className={styles.grain} />

      <Box className={styles.mountainSilhouette}>
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,300 L0,200 L120,120 L200,160 L320,60 L420,140 L520,80 L620,150 L720,40 L820,130 L920,70 L1020,160 L1120,90 L1240,170 L1340,100 L1440,150 L1440,300 Z"
            fill="rgba(74,173,170,0.06)"
          />
          <path
            d="M0,300 L0,240 L180,170 L280,210 L400,130 L500,190 L600,110 L700,180 L800,100 L900,170 L1000,120 L1100,190 L1200,140 L1320,200 L1440,160 L1440,300 Z"
            fill="rgba(13,92,99,0.22)"
          />
        </svg>
      </Box>

      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <Typography className={styles.eyebrowText}>Escursioni</Typography>
          <span className={styles.eyebrowLine} />
        </Box>

        <Typography variant="h1" className={styles.heading}>
          Esplora
          <br />
          <span className={styles.headingAccent}>il Parco Alpi Liguri</span>
        </Typography>

        <Typography className={styles.subheading}>
          Trekking guidati, esperienze olistiche e passeggiate a cavallo.
          <br />
          Percorsi per tutti, dal bosco alle vette.
        </Typography>

        <Box className={styles.pills}>
          <span className={styles.pill}>🚶‍♂️ Trekking guidati</span>
          <span className={styles.pill}>✨ Reiki & Cristalloterapia</span>
          <span className={styles.pill}>🐎 Passeggiate a cavallo</span>
          <span className={styles.pill}>🚲 E-Bike disponibili</span>
        </Box>
      </Container>
    </Box>
  );
}
