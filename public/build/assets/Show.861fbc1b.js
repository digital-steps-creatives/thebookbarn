import{_ as p}from"./AppLayout.dc6e3cfa.js";import c from"./DeleteUserForm.4bb4d448.js";import l from"./LogoutOtherBrowserSessionsForm.13f59f98.js";import{S as s}from"./SectionBorder.355250a9.js";import f from"./TwoFactorAuthenticationForm.9a8ba40e.js";import u from"./UpdatePasswordForm.5b3faeab.js";import d from"./UpdateProfileInformationForm.7efbf86d.js";import{ac as _,bk as n,aS as e,af as i,ae as r,am as t,ad as a,a1 as h}from"./runtime-dom.esm-bundler.585c24df.js";import"./app.f1de3385.js";/* empty css            */import"./ResponsiveNavLink.baeb7a52.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./NavLink.0007d28d.js";import"./DialogModal.cffea1b7.js";import"./SectionTitle.bc2dba74.js";import"./DangerButton.47642ba9.js";import"./TextInput.88713dfb.js";import"./SecondaryButton.e170e9ee.js";import"./ActionMessage.74eb337c.js";import"./PrimaryButton.f766bf5f.js";import"./InputLabel.4ab8880c.js";import"./FormSection.687612de.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",k,[t(d,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{K as default};