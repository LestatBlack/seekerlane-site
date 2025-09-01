import Nav from '../components/Nav'
import Footer from '../components/Footer'
export const metadata={title:'SeekerLane • Tech Recruitment',description:'Recruitment for IT roles'};
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="en"><body style={{margin:0,fontFamily:'system-ui'}}><Nav/><main style={{maxWidth:960,margin:'0 auto',padding:24}}>{children}</main><Footer/></body></html>)}
