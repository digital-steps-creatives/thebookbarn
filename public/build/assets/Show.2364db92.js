import p from"./DeleteUserForm.6d47d64d.js";import c from"./LogoutOtherBrowserSessionsForm.2eeeef1a.js";import{S as s}from"./SectionBorder.cbf065d4.js";import l from"./TwoFactorAuthenticationForm.954cccb8.js";import f from"./UpdatePasswordForm.fa9b3e29.js";import u from"./UpdateProfileInformationForm.46604b58.js";import{A as d}from"./AdminLayout.0af5c1a0.js";import{o as e,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.72b4eafe.js";import"./DialogModal.0a2e0194.js";import"./SectionTitle.0c6891f6.js";import"./DangerButton.43734bec.js";import"./InputError.2a86d88f.js";import"./SecondaryButton.d53e472b.js";import"./TextInput.f9f36068.js";import"./ActionMessage.8ba95670.js";import"./PrimaryButton.027ae110.js";import"./ConfirmsPassword.0a22fbf0.js";import"./InputLabel.cec4dd51.js";import"./FormSection.422eba7a.js";import"./DropdownLink.ebeb7372.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},y={key:1},k={key:2},G={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,A)=>(e(),_(d,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(u,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",y,[t(f,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",k,[t(l,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(c,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{G as default};