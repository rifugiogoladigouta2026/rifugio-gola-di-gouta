"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Slide from "@mui/material/Slide";
import type { TransitionProps } from "@mui/material/transitions";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import s from "./Header.module.scss";
import { socials } from "@/lib/utils";
import { navLinks } from "../siteConfig";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const menuNumbers = navLinks.map((_, i) => String(i + 1).padStart(2, "0"));

const YEAR = new Date().getFullYear();

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 24 });

  const currentPath = pathname.replace(/\/$/, "");

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={`${s.appBar} ${scrolled ? s.scrolled : ""}`}
      >
        <Toolbar disableGutters className={s.toolbar}>

          <Link href="/" className={s.logoLink}>
            <Box className={s.logoWrapper}>
              <Image
                src="/images/logo.svg"
                alt="Rifugio Gouta"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>

          <Box className={s.altitudeTag}>
            <span className={s.altitudeLine} />
            <Typography className={s.altitudeText}>
              1.200 m s.l.m. · Sella di Gouta, Pigna (IM)
            </Typography>
            <span className={s.altitudeLine} />
          </Box>

          <Stack direction="row" spacing={1} alignItems="center" className={s.controls}>
            <Stack direction="row" spacing={0.5} className={s.socialRow}>
              <a className={`${s.socialBtn} ${s.ig}`} href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon sx={{ fontSize: 17 }} />
              </a>
              <a className={`${s.socialBtn} ${s.fb}`} href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon sx={{ fontSize: 17 }} />
              </a>
              <a className={`${s.socialBtn} ${s.wa}`} href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon sx={{ fontSize: 17 }} />
              </a>
            </Stack>

            <ButtonBase
              className={s.menuBtn}
              onClick={() => setOpen(true)}
              ref={menuBtnRef}
              aria-label="Apri menu"
              disableRipple
            >
              <Box className={s.burgerIcon}>
                <span className={s.burgerLine} />
                <span className={s.burgerLine} />
                <span className={`${s.burgerLine} ${s.burgerLineShort}`} />
              </Box>
              <Typography className={s.menuBtnLabel}>Menu</Typography>
            </ButtonBase>
          </Stack>
        </Toolbar>
      </AppBar>

      <Dialog
        fullScreen
        open={open}
        onClose={() => setOpen(false)}
        disableRestoreFocus
        slots={{ transition: Transition }}
        slotProps={{
          transition: {
            onEntered: () => closeBtnRef.current?.focus(),
            onExited: () => menuBtnRef.current?.focus(),
          },
          paper: { sx: { background: "transparent", boxShadow: "none" } },
        }}
      >
        <Box className={s.overlay}>
          <Box className={s.overlayBgGlow} />
          <Box className={s.accentBar} />
          <Box className={s.grain} />

          <Box className={s.mountainSilhouette}>
            <svg viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0,300 L0,200 L120,120 L200,160 L320,60 L420,140 L520,80 L620,150 L720,40 L820,130 L920,70 L1020,160 L1120,90 L1240,170 L1340,100 L1440,150 L1440,300 Z"
                fill="rgba(74,173,170,0.06)"
              />
              <path
                d="M0,300 L0,240 L180,170 L280,210 L400,130 L500,190 L600,110 L700,180 L800,100 L900,170 L1000,120 L1100,190 L1200,140 L1320,200 L1440,160 L1440,300 Z"
                fill="rgba(13,92,99,0.15)"
              />
            </svg>
          </Box>

          <Box className={s.overlayTopBar}>
            <Link href="/" onClick={() => setOpen(false)} className={s.overlayLogoLink}>
              <Box className={s.overlayLogoWrapper}>
                <Image
                  src="/images/logo.svg"
                  alt="Rifugio Gouta"
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Link>

            <Stack direction="row" spacing={1} alignItems="center">
              <Stack direction="row" spacing={0.5} className={s.socialRow}>
                <a className={`${s.socialBtn} ${s.ig}`} href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon sx={{ fontSize: 17 }} />
                </a>
                <a className={`${s.socialBtn} ${s.fb}`} href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon sx={{ fontSize: 17 }} />
                </a>
                <a className={`${s.socialBtn} ${s.wa}`} href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <WhatsAppIcon sx={{ fontSize: 17 }} />
                </a>
              </Stack>

              <ButtonBase
                className={s.closeBtn}
                onClick={() => setOpen(false)}
                ref={closeBtnRef}
                aria-label="Chiudi menu"
                disableRipple
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </ButtonBase>
            </Stack>
          </Box>

          <Box className={s.navArea}>
            <Box className={s.navLeft}>
              <Box className={s.navEyebrow}>
                <span className={s.eyebrowLine} />
                <Typography className={s.eyebrowText}>Navigazione</Typography>
              </Box>

              <nav>
                {navLinks.map((link, i) => {
                  const active = currentPath === link.href.replace(/\/$/, "");
                  const isHovered = hoveredIndex === i;
                  const isDimmed = hoveredIndex !== null && !isHovered;

                  return (
                    <ButtonBase
                      key={link.href}
                      disableRipple
                      className={`${s.navItem} ${active ? s.navItemActive : ""} ${isDimmed ? s.navItemDimmed : ""}`}
                      onClick={() => {
                        if (link.href.startsWith('#')) {
                          setOpen(false);
                          setTimeout(() => {
                            document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                          }, 350);
                        } else {
                          router.push(link.href);
                          setOpen(false);
                        }
                      }}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Typography className={s.navNumber}>{menuNumbers[i]}</Typography>
                      <Typography className={s.navLinkLabel}>{link.label}</Typography>
                      <Box className={s.navArrow}>→</Box>
                    </ButtonBase>
                  );
                })}
              </nav>
            </Box>

            <Box className={s.navRight}>
              {[
                { title: "Dove Siamo", text: "Sella di Gouta, Pigna (IM)\nAlpi Liguri · 1.200 m s.l.m." },
                { title: "Stagione", text: "Giugno — Ottobre\nInvernale su prenotazione" },
                { title: "Contatti", text: `${socials.phone}\n${socials.email}` },
              ].map((card) => (
                <Box key={card.title} className={s.infoCard}>
                  <Typography className={s.infoCardTitle}>{card.title}</Typography>
                  <Typography className={s.infoCardText}>
                    {card.text.split("\n").map((line, i) => (
                      <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
                    ))}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box className={s.overlayBottomBar}>
            <Typography className={s.overlayBottomText}>
              © {YEAR} Rifugio Gouta
            </Typography>
            <Typography className={s.overlayBottomText}>
              Gestione Familiare · Parco Alpi Liguri
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </>
  );
}
