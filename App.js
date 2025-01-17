import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "./src/pages/LandingPage";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import RegisterSuccess from "./src/pages/Register/components/RegisterSuccess";
import MyTabsDashboard from "./src/pages/Distributor/Navigator/NavigatorDashboard";
import MyTabsMerchant from "./src/pages/Merchant/Navigator/Navigator";
import EditProfile from "./src/pages/Merchant/Profile/components/EditProfile";
import KeamananAkun from "./src/pages/Merchant/Profile/components/KeamananAkun";
import ChangePassword from "./src/pages/Merchant/Profile/components/ChangePassword";
import ChangePasswordSuccess from "./src/pages/Merchant/Profile/components/ChangePasswordSuccess";
import FormInvoice from "./src/pages/Merchant/Bill/components/FormInvoice";
import Bill from "./src/pages/Merchant/Bill";
import DetailInvoice from "./src/pages/Merchant/Bill/components/DetailInvoice";
import store from "./src/store/store";
import { Provider } from "react-redux";
import OtpRequestMerchant from "./src/pages/Merchant/Insurance/components/OtpRequestInsurance";
import DetailRequestInsurance from "./src/pages/Merchant/Insurance/components/DetailRequest";
import FormRequestInsurance from "./src/pages/Merchant/Insurance/components/FormRequest";
import OtpInvoiceMerchant from "./src/pages/Merchant/Bill/components/OtpInvoiceMerchant";
import DetailInvoiceDistributor from "./src/pages/Distributor/Bill/components/DetailInvoiceDistributor";

const routerList = [
  {
    name: "landing-page",
    component: LandingPage,
    headerShown: false,
  },
  {
    name: "dashboard-merchant",
    component: MyTabsMerchant,
    headerShown: false,
  },
  {
    name: "dashboard-distributor",
    component: MyTabsDashboard,
    headerShown: false,
  },
  {
    name: "login",
    component: Login,
    headerShown: false,
  },
  {
    name: "register",
    component: Register,
    headerShown: false,
  },
  {
    name: "register-success",
    component: RegisterSuccess,
    headerShown: false,
  },
  {
    name: "form-request-assurance",
    component: FormRequestInsurance,
    headerShown: false,
  },
  {
    name: "otp-request-insurance",
    component: OtpRequestMerchant,
    headerShown: false,
  },
  {
    name: "detail-request-insurance",
    component: DetailRequestInsurance,
    headerShown: false,
  },
  {
    name: "edit-profile",
    component: EditProfile,
    headerShown: false,
  },
  {
    name: "keamanan-akun",
    component: KeamananAkun,
    headerShown: false,
  },
  {
    name: "change-password",
    component: ChangePassword,
    headerShown: false,
  },
  {
    name: "change-password-success",
    component: ChangePasswordSuccess,
    headerShown: false,
  },
  {
    name: "form-invoice",
    component: FormInvoice,
    headerShown: false,
  },
  {
    name: "Bill",
    component: Bill,
    headerShown: false,
  },
  {
    name: "detail-invoice",
    component: DetailInvoice,
    headerShown: false,
  },
  {
    name: "otp-invoice-merchant",
    component: OtpInvoiceMerchant,
    headerShown: false,
  },
  {
    name: "detail-invoice-distributor",
    component: DetailInvoiceDistributor,
    headerShown: false,
  },
];

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {routerList.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{ headerShown: item.headerShown }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
