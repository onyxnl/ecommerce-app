"use client";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import styles from "./ExtensionsDashboard.module.css";

type FilterTab = "All" | "Active" | "Inactive";

type ExtensionItem = {
  id: string;
  name: string;
  description: string;
  iconBg: string;
  iconLabel: string;
  active: boolean;
};

type DashboardCopy = {
  brand: string;
  listTitle: string;
  filters: Record<FilterTab, string>;
  removeLabel: string;
  settingsLabel: string;
  extensions: Record<string, { name: string; description: string }>;
};

type ExtensionsDashboardProps = {
  copy: DashboardCopy;
};

const filterTabs: FilterTab[] = ["All", "Active", "Inactive"];

const extensions: ExtensionItem[] = [
  {
    id: "dev-lens",
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    iconBg: "#bdd4bb",
    iconLabel: "DL",
    active: true,
  },
  {
    id: "stylespy",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    iconBg: "#a9cfe0",
    iconLabel: "SS",
    active: true,
  },
  {
    id: "speed-boost",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    iconBg: "#edc7ca",
    iconLabel: "SB",
    active: false,
  },
  {
    id: "json-wizard",
    name: "JSONWizard",
    description: "Formats, validates, and prettifies JSON responses in-browser.",
    iconBg: "#d9bbdd",
    iconLabel: "JW",
    active: true,
  },
  {
    id: "tab-master-pro",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    iconBg: "#d0c0e7",
    iconLabel: "TM",
    active: true,
  },
  {
    id: "viewport-buddy",
    name: "ViewportBuddy",
    description: "Simulates various screen resolutions directly within the browser.",
    iconBg: "#b3ccef",
    iconLabel: "VB",
    active: false,
  },
  {
    id: "markup-notes",
    name: "Markup Notes",
    description: "Enables annotation and notes directly onto webpages for debugging.",
    iconBg: "#95dcf4",
    iconLabel: "MN",
    active: true,
  },
  {
    id: "grid-guides",
    name: "GridGuides",
    description: "Overlay customizable grids and alignment guides on any webpage.",
    iconBg: "#c1c4fb",
    iconLabel: "GG",
    active: false,
  },
  {
    id: "palette-picker",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    iconBg: "#9de4d6",
    iconLabel: "PP",
    active: true,
  },
  {
    id: "link-checker",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    iconBg: "#f2dac3",
    iconLabel: "LC",
    active: true,
  },
  {
    id: "dom-snapshot",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    iconBg: "#8fd9ea",
    iconLabel: "DS",
    active: false,
  },
  {
    id: "console-plus",
    name: "ConsolePlus",
    description: "Enhanced developer console with advanced filtering and logging.",
    iconBg: "#b1ecb9",
    iconLabel: "CP",
    active: true,
  },
];

export default function ExtensionsDashboard({ copy }: ExtensionsDashboardProps) {
  const localizedExtensions = extensions.map((item) => ({
    ...item,
    name: copy.extensions[item.id]?.name ?? item.name,
    description: copy.extensions[item.id]?.description ?? item.description,
  }));

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <ExtensionRoundedIcon fontSize="small" />
            </span>
            <span>{copy.brand}</span>
          </div>
          <button className={styles.settingsBtn} aria-label={copy.settingsLabel}>
            <SettingsRoundedIcon fontSize="small" />
          </button>
        </header>

        <div className={styles.headerRow}>
          <h2 className={styles.title}>{copy.listTitle}</h2>
          <div className={styles.filters} aria-label="Extension filters">
            {filterTabs.map((tab, index) => (
              <button
                key={tab}
                className={`${styles.filterBtn} ${index === 0 ? styles.filterBtnActive : ""}`}
              >
                {copy.filters[tab]}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {localizedExtensions.map((item) => (
            <article key={item.id} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon} style={{ background: item.iconBg }}>
                  {item.iconLabel}
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              </div>

              <div className={styles.cardActions}>
                <button className={styles.removeBtn}>{copy.removeLabel}</button>
                <span
                  aria-label={item.active ? "Active" : "Inactive"}
                  className={`${styles.toggle} ${item.active ? styles.toggleOn : ""}`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
