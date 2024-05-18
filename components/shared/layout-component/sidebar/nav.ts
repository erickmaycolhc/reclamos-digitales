import useTranslation from "next-translate/useTranslation";

export default function MENUITEMS() {
  const { t } = useTranslation();

  return [
    {
      menutitle: t("nav:header-dashboard"),
      Items: [
        {
          title: t("nav:item-dashboard"),
          path: "/admin/dashboard",
          icon: "ti-home",
          type: "link",
          active: true,
          selected: true,
        },
      ],
    },
    {
      menutitle: t("nav:header-application"),
      Items: [
        {
          title: t("nav:item-claims"),
          path: "/admin/claims",
          icon: "ti-write",
          type: "link",
          active: false,
          selected: false,
        },
        {
          title: t("nav:item-complaints"),
          path: "/admin/complain",
          icon: "ti-write",
          type: "link",
          active: false,
          selected: false,
        },
        {
          title: t("nav:item-payments"),
          path: "/admin/dashboard",
          icon: "ti-money",
          type: "link",
          active: false,
          selected: false,
        },
      ],
    },
    {
      menutitle: t("nav:header-graphics"),
      Items: [
        {
          title: t("nav:item-report"),
          path: "/admin/dashboard",
          icon: "ti-bar-chart",
          type: "link",
          active: false,
          selected: false,
        },
      ],
    },
    {
      menutitle: t("nav:header-setting"),
      Items: [
        {
          title: t("nav:item-profile"),
          path: "/admin/dashboard",
          icon: "ti-user",
          type: "link",
          active: false,
          selected: false,
        },
        {
          title: t("nav:item-my-company"),
          icon: "ti-wallet",
          type: "sub",
          active: false,
          selected: false,
        },
        {
          title: t("nav:item-form"),
          icon: "ti-receipt",
          type: "sub",
          active: false,
          selected: false,
        },
      ],
    },
    {
      menutitle: t("nav:header-contact"),
      Items: [
        {
          title: t("nav:item-whatsapp"),
          path: "/admin/dashboard",
          icon: "ti-mobile",
          type: "link",
          active: false,
          selected: false,
        },
        {
          title: t("nav:item-web"),
          path: "/admin/dashboard",
          icon: "ti-world",
          type: "link",
          active: false,
          selected: false,
        },
      ],
    },
    {
      menutitle: t("nav:header-session"),
      Items: [
        {
          title: t("nav:item-log-out"),
          path: "/admin/dashboard",
          icon: "ti-lock",
          type: "link",
          active: false,
          selected: false,
        },
      ],
    },
  ];
}
