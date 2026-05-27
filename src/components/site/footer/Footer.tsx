"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import styles from "./Footer.module.scss";
import { navLinks } from "../siteConfig";
import { socials } from "@/lib/utils";


const contacts = [
  {
    icon: <LocationOnIcon fontSize="small" />,
    text: "Sella di Gouta, Pigna (IM) — Liguria",
  },
  { icon: <PhoneIcon fontSize="small" />, text: "+39 348 030 5996" },
  { icon: <EmailIcon fontSize="small" />, text: "rifugiogoladigouta2026@gmail.com" },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer} id="footer">
      <Box className={styles.waveDivider}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </Box>

      <Container maxWidth="xl" className={styles.container}>
        <Grid container spacing={6} className={styles.grid}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className={styles.brand}>
              <Box sx={{ position: "relative", width: 200, height: 80 }}>
                <Image
                  src="/images/logo.svg"
                  alt="Rifugio Gouta"
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </Box>
              <Typography className={styles.brandDesc}>
                Un rifugio di famiglia nel cuore del Bosco di Gouta, sopra Pigna
                nella Val Nervia. Accoglienza autentica, cucina tipica e natura
                incontaminata a 1.200 m s.l.m.
              </Typography>
              <Box className={styles.socials}>
                <IconButton
                  className={styles.socialBtn}
                  aria-label="Instagram"
                  href={socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  className={styles.socialBtn}
                  aria-label="Facebook"
                  href={socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  className={styles.socialBtn}
                  aria-label="WhatsApp"
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  component="a"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography className={styles.colTitle}>Esplora</Typography>
            <Box className={styles.linkList}>
              {navLinks
                .filter((l) => l.label !== "Contatti")
                .map((l) => (
                  <a key={l.label} href={l.href} className={styles.link}>
                    <span className={styles.linkArrow}>→</span>
                    {l.label}
                  </a>
                ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }} id="contatti">
            <Typography className={styles.colTitle}>Contatti</Typography>
            <Box className={styles.contactList}>
              {contacts.map((c) => (
                <Box key={c.text} className={styles.contactItem}>
                  <Box className={styles.contactIcon}>{c.icon}</Box>
                  <Typography className={styles.contactText}>
                    {c.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box className={styles.seasonBox}>
              <Typography className={styles.seasonTitle}>
                Stagione {YEAR}
              </Typography>
              <Typography className={styles.seasonText}>
                Apertura dal 1 maggio 2026.
                <br />
                Nuova gestione.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider className={styles.divider} />

        <Box className={styles.legalBar}>
          <Typography className={styles.legalNote}>
            Rifugio Gola di Gouta di Valeriano Candido — Regione Gouta, snc Pigna (IM) — P.IVA 01831280084
          </Typography>
          <Typography className={styles.legalNote}>
            CIN: IT008043B81W6QEHND — Codice Identificativo Regionale (CIR): 008043-RIF-0004
          </Typography>
        </Box>

        <Box className={styles.bottomBar}>
          <Typography className={styles.copyright}>
            © {YEAR} Rifugio Gouta — Tutti i diritti riservati
          </Typography>
          <Box className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <span className={styles.bottomDot}>·</span>
            <a href="#" className={styles.bottomLink}>
              Cookie Policy
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
