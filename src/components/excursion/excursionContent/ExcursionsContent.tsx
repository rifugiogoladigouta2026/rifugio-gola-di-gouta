"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import styles from "./ExcursionsContent.module.scss";
import { categorie, servizi } from "../excursionsConfig";
import { socials } from "@/lib/utils";

const excursionGallery = [
  {
    src: "/images/excursions/escursioni1.jpeg",
    alt: "Gruppo in cammino lungo un sentiero nel bosco",
    title: "Sentieri guidati",
    description: "Cammini nel verde tra ombra, respiro e racconti del territorio.",
    className: "galleryCardPrimary",
  },
  {
    src: "/images/excursions/escursioni2.jpeg",
    alt: "Pozza d'acqua limpida con piccola cascata nel bosco",
    title: "Pause rigeneranti",
    description: "Angoli d'acqua e luce che rendono ogni escursione ancora piu speciale.",
    className: "galleryCardWide",
  },
  {
    src: "/images/excursions/escursioni3.jpeg",
    alt: "Escursionisti che salgono lungo un sentiero di montagna nel bosco",
    title: "Percorsi autentici",
    description: "Itinerari veri, adatti a chi cerca natura, movimento e silenzio.",
    className: "galleryCardTall",
  },
];

export default function ExcursionsContent() {
  return (
    <Box component="section" className={styles.section}>
      <Box className={styles.bgTexture} />

      <Container maxWidth="xl" className={styles.container}>

        <Box className={styles.introBlock}>
          <Box className={styles.labelRow}>
            <span className={styles.labelLine} />
            <Typography className={styles.label}>Il territorio</Typography>
            <span className={styles.labelLine} />
          </Box>
          <Typography className={styles.introHeading}>
            Cammini pensati
            <br />
            <span className={styles.introAccent}>per ogni esigenza</span>
          </Typography>
          <Typography className={styles.introBody}>
            Scopri il territorio attraverso percorsi dedicati a ogni tipo di viaggiatore: dalle
            escursioni per adulti, volte alla conoscenza della storia e della natura locale, ai
            percorsi per bambini creati per farli innamorare dell&apos;ambiente che li circonda.
            Ogni percorso si conclude con una sosta rigenerante al rifugio, dove potrete gustare i
            sapori genuini della nostra cucina.
          </Typography>
        </Box>

        <Box className={styles.gallerySection}>
          <Box className={styles.galleryGrid}>
            {excursionGallery.map((photo) => (
              <Box
                key={photo.src}
                className={`${styles.galleryCard} ${styles[photo.className]}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.galleryImage}
                />
                <Box className={styles.galleryOverlay} />
                <Box className={styles.galleryCaption}>
                  <Typography className={styles.galleryTitle}>{photo.title}</Typography>
                  <Typography className={styles.galleryDescription}>
                    {photo.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Le nostre escursioni</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={4} sx={{ marginBottom: "clamp(3.5rem, 7vw, 6rem)" }}>
          {categorie.map((cat) => (
            <Grid size={{ xs: 12, md: 4 }} key={cat.title}>
              <Box className={`${styles.catCard} ${cat.highlight ? styles.catCardHighlight : ""}`}>
                <Box className={styles.catHeader}>
                  <Typography className={styles.catIcon}>{cat.icon}</Typography>
                  <span className={styles.catTag}>{cat.tag}</span>
                </Box>
                <Typography className={styles.catTitle}>{cat.title}</Typography>
                <Box className={styles.catDivider} />
                {cat.items.map((item) => (
                  <Box key={item.label} className={styles.catItem}>
                    <Typography className={styles.catItemLabel}>{item.label}</Typography>
                    <Typography className={styles.catItemDesc}>{item.desc}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className={styles.labelRow}>
          <span className={styles.labelLine} />
          <Typography className={styles.label}>Servizi & mobilità dolce</Typography>
          <span className={styles.labelLine} />
        </Box>

        <Grid container spacing={3} sx={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          {servizi.map((s) => (
            <Grid size={{ xs: 12, md: 4 }} key={s.title}>
              <Box className={styles.servizioCard}>
                <Typography className={styles.servizioIcon}>{s.icon}</Typography>
                <Typography className={styles.servizioTitle}>{s.title}</Typography>
                <Typography className={styles.servizioDesc}>{s.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className={styles.olisticaNote}>
          <Typography className={styles.olisticaText}>
            ✨ <strong>Esperienze olistiche nel bosco</strong> — Siamo convinti che l&apos;energia
            della natura amplifichi i benefici di Reiki e Cristalloterapia, aiutando a riequilibrare
            i Chakra e a creare una connessione autentica tra noi stessi e l&apos;ambiente.
          </Typography>
        </Box>

        <Box className={styles.ctaBlock}>
          <Box className={styles.ctaGlow} />
          <Box className={styles.ctaContent}>
            <Typography className={styles.ctaLabel}>Prenotazioni</Typography>
            <Typography className={styles.ctaHeading}>
              Pronti a esplorare
              <br />
              <span className={styles.ctaAccent}>il bosco con noi?</span>
            </Typography>
            <Typography className={styles.ctaBody}>
              Per prenotare un&apos;escursione, un&apos;esperienza olistica o informarti sulle
              e-bike, scriveteci su WhatsApp. Indicate il tipo di attività, la data e il numero di
              partecipanti.
            </Typography>
            <Box className={styles.ctaButtons}>
              <Link
                href={socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaBtnPrimary}
              >
                💬 Scrivici su WhatsApp
              </Link>
              <Link href="/#footer" className={styles.ctaBtnSecondary}>
                Tutti i contatti →
              </Link>
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
