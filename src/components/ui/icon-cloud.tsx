"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
} from "react-icon-cloud";

interface IconCloudProps {
  iconSlugs: string[];
}

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
  },
  options: {
    depth: 1,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    wheelZoom: false,
    clickToFront: 500,
    initial: [0.1, -0.1],
    tooltipDelay: 0,
    outlineColour: "#0000",
    reverse: true,
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export default function IconCloud({ iconSlugs = [] }: IconCloudProps) {
  const [icons, setIcons] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then((data) => {
        const renderedIcons = Object.values(data.simpleIcons).map((icon) =>
          renderSimpleIcon({
            icon,
            bgHex: "#000000",
            fallbackHex: "#fff",
            minContrastRatio: 2,
            size: 42,
            aProps: {
              href: undefined,
              target: undefined,
              rel: undefined,
              onClick: (e) => e.preventDefault(),
            },
          })
        );
        setIcons(renderedIcons);
      });
    }
  }, [iconSlugs]);

  if (icons.length === 0) return null;

  return <Cloud {...cloudProps}>{icons}</Cloud>;
}
