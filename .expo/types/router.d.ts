/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/stylesheet`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/Date`; params?: Router.UnknownInputParams; } | { pathname: `/components/MyButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/UploadImg`; params?: Router.UnknownInputParams; } | { pathname: `/components/addMedButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/dateNextDose`; params?: Router.UnknownInputParams; } | { pathname: `/components/datetimepicker`; params?: Router.UnknownInputParams; } | { pathname: `/components/displayDropdown`; params?: Router.UnknownInputParams; } | { pathname: `/components/header`; params?: Router.UnknownInputParams; } | { pathname: `/components/horizontalCalendar`; params?: Router.UnknownInputParams; } | { pathname: `/components/measurements`; params?: Router.UnknownInputParams; } | { pathname: `/components/medReminder`; params?: Router.UnknownInputParams; } | { pathname: `/components/scrollPicker`; params?: Router.UnknownInputParams; } | { pathname: `/components/suggestionSearch`; params?: Router.UnknownInputParams; } | { pathname: `/data/medData`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/appnavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/mainnavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/medLibNavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/mednavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/oldPages/details.component`; params?: Router.UnknownInputParams; } | { pathname: `/oldPages/third.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/medLibrary.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/addmed.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/addtimeinterval.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/dosepertime.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/duration.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/editmed.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/manualscreen.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/nextdose.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/scanconfirm.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/scanscreen.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/timenextdose.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/new-hifi/EditScreens`; params?: Router.UnknownInputParams; } | { pathname: `/pages/new-hifi/FormScreen`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/stylesheet`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/components/Date`; params?: Router.UnknownOutputParams; } | { pathname: `/components/MyButton`; params?: Router.UnknownOutputParams; } | { pathname: `/components/UploadImg`; params?: Router.UnknownOutputParams; } | { pathname: `/components/addMedButton`; params?: Router.UnknownOutputParams; } | { pathname: `/components/dateNextDose`; params?: Router.UnknownOutputParams; } | { pathname: `/components/datetimepicker`; params?: Router.UnknownOutputParams; } | { pathname: `/components/displayDropdown`; params?: Router.UnknownOutputParams; } | { pathname: `/components/header`; params?: Router.UnknownOutputParams; } | { pathname: `/components/horizontalCalendar`; params?: Router.UnknownOutputParams; } | { pathname: `/components/measurements`; params?: Router.UnknownOutputParams; } | { pathname: `/components/medReminder`; params?: Router.UnknownOutputParams; } | { pathname: `/components/scrollPicker`; params?: Router.UnknownOutputParams; } | { pathname: `/components/suggestionSearch`; params?: Router.UnknownOutputParams; } | { pathname: `/data/medData`; params?: Router.UnknownOutputParams; } | { pathname: `/navigators/appnavigator.component`; params?: Router.UnknownOutputParams; } | { pathname: `/navigators/mainnavigator.component`; params?: Router.UnknownOutputParams; } | { pathname: `/navigators/medLibNavigator.component`; params?: Router.UnknownOutputParams; } | { pathname: `/navigators/mednavigator.component`; params?: Router.UnknownOutputParams; } | { pathname: `/oldPages/details.component`; params?: Router.UnknownOutputParams; } | { pathname: `/oldPages/third.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/home.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/medLibrary.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/addmed.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/addtimeinterval.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/dosepertime.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/duration.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/editmed.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/manualscreen.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/nextdose.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/scanconfirm.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/scanscreen.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/addMed/timenextdose.component`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/new-hifi/EditScreens`; params?: Router.UnknownOutputParams; } | { pathname: `/pages/new-hifi/FormScreen`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/stylesheet${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/components/Date${`?${string}` | `#${string}` | ''}` | `/components/MyButton${`?${string}` | `#${string}` | ''}` | `/components/UploadImg${`?${string}` | `#${string}` | ''}` | `/components/addMedButton${`?${string}` | `#${string}` | ''}` | `/components/dateNextDose${`?${string}` | `#${string}` | ''}` | `/components/datetimepicker${`?${string}` | `#${string}` | ''}` | `/components/displayDropdown${`?${string}` | `#${string}` | ''}` | `/components/header${`?${string}` | `#${string}` | ''}` | `/components/horizontalCalendar${`?${string}` | `#${string}` | ''}` | `/components/measurements${`?${string}` | `#${string}` | ''}` | `/components/medReminder${`?${string}` | `#${string}` | ''}` | `/components/scrollPicker${`?${string}` | `#${string}` | ''}` | `/components/suggestionSearch${`?${string}` | `#${string}` | ''}` | `/data/medData${`?${string}` | `#${string}` | ''}` | `/navigators/appnavigator.component${`?${string}` | `#${string}` | ''}` | `/navigators/mainnavigator.component${`?${string}` | `#${string}` | ''}` | `/navigators/medLibNavigator.component${`?${string}` | `#${string}` | ''}` | `/navigators/mednavigator.component${`?${string}` | `#${string}` | ''}` | `/oldPages/details.component${`?${string}` | `#${string}` | ''}` | `/oldPages/third.component${`?${string}` | `#${string}` | ''}` | `/pages/home.component${`?${string}` | `#${string}` | ''}` | `/pages/medLibrary.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/addmed.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/addtimeinterval.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/dosepertime.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/duration.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/editmed.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/manualscreen.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/nextdose.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/scanconfirm.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/scanscreen.component${`?${string}` | `#${string}` | ''}` | `/pages/addMed/timenextdose.component${`?${string}` | `#${string}` | ''}` | `/pages/new-hifi/EditScreens${`?${string}` | `#${string}` | ''}` | `/pages/new-hifi/FormScreen${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/stylesheet`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/components/Date`; params?: Router.UnknownInputParams; } | { pathname: `/components/MyButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/UploadImg`; params?: Router.UnknownInputParams; } | { pathname: `/components/addMedButton`; params?: Router.UnknownInputParams; } | { pathname: `/components/dateNextDose`; params?: Router.UnknownInputParams; } | { pathname: `/components/datetimepicker`; params?: Router.UnknownInputParams; } | { pathname: `/components/displayDropdown`; params?: Router.UnknownInputParams; } | { pathname: `/components/header`; params?: Router.UnknownInputParams; } | { pathname: `/components/horizontalCalendar`; params?: Router.UnknownInputParams; } | { pathname: `/components/measurements`; params?: Router.UnknownInputParams; } | { pathname: `/components/medReminder`; params?: Router.UnknownInputParams; } | { pathname: `/components/scrollPicker`; params?: Router.UnknownInputParams; } | { pathname: `/components/suggestionSearch`; params?: Router.UnknownInputParams; } | { pathname: `/data/medData`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/appnavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/mainnavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/medLibNavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/navigators/mednavigator.component`; params?: Router.UnknownInputParams; } | { pathname: `/oldPages/details.component`; params?: Router.UnknownInputParams; } | { pathname: `/oldPages/third.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/home.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/medLibrary.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/addmed.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/addtimeinterval.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/dosepertime.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/duration.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/editmed.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/manualscreen.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/nextdose.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/scanconfirm.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/scanscreen.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/addMed/timenextdose.component`; params?: Router.UnknownInputParams; } | { pathname: `/pages/new-hifi/EditScreens`; params?: Router.UnknownInputParams; } | { pathname: `/pages/new-hifi/FormScreen`; params?: Router.UnknownInputParams; };
    }
  }
}