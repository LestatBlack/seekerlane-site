{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 "use client";\
\
\
import Header from "@/components/Header";\
import Hero from "@/components/marketing/Hero";\
import About from "@/components/About";\
import Services from "@/components/Services";\
import WhyHireUs from "@/components/WhyHireUs";\
import Footer from "@/components/Footer";\
import \{ useScrollAnimation \} from "@/hooks/useScrollAnimation";\
\
const Index = () => \{\
  useScrollAnimation();\
  \
  return (\
    <div className="min-h-screen bg-background">\
      <Header />\
      <main>\
        <Hero />\
        <About />\
        <Services />\
        <WhyHireUs />\
      </main>\
      <Footer />\
    </div>\
  );\
\};\
\
export default Index;\
}