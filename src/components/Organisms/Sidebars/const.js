import DashboardIcon from "../../../assets/Icons/DashboardIcon";
import OrderIcon from "../../../assets/Icons/OrderIcon";
import ProductIcon from "../../../assets/Icons/ProductIcon";
import CustomersIcon from "../../../assets/Icons/CustomersIcon";
import AnalyticIcon from "../../../assets/Icons/AnalyticsIcon";
import MarketingIcon from "../../../assets/Icons/MarketingIcon";
import IntegrationIcon from "../../../assets/Icons/IntegrationsIcon";
import MyStoreIcon from "../../../assets/Icons/MyStoreIcon";
import DiscountsIcon from "../../../assets/Icons/DiscountsIcon";
import SettingIcon from "../../../assets/Icons/SettingsIcon";
import GetHelp from "../../../assets/Icons/GetHelpIcon";

export const MAINLIST = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    to: "/",
  },
  {
    id: "orders",
    label: "Orders",
    icon: OrderIcon,
    to: "orders",
  },
  {
    id: "products",
    label: "Products",
    icon: ProductIcon,
    to: "products",
  },
  {
    id: "customers",
    label: "Customers",
    icon: CustomersIcon,
    to: "customers",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: AnalyticIcon,
    to: "analytics",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: MarketingIcon,
    to: "marketing",
  },
];

export const SALESCHANNEL = [
  {
    id: "integrations",
    label: "Integrations",
    icon: IntegrationIcon,
    to: "integrations",
  },
  {
    id: "my Store",
    label: "My Store",
    icon: MyStoreIcon,
    to: "my_store",
  },
  {
    id: "discounts",
    label: "Discounts",
    icon: DiscountsIcon,
    to: "discounts",
  },
];

export const SETTING = [
  {
    id: "settings",
    label: "Settings",
    icon: SettingIcon,
    to: "setting",
  },
  {
    id: "getHelp",
    label: "Get Help",
    icon: GetHelp,
    to: "get_help",
  },
];
