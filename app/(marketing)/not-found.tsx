{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 "use client";\
\
import \{ useLocation \} from "react-router-dom";\
import \{ useEffect \} from "react";\
\
const NotFound = () => \{\
  const location = useLocation();\
\
  useEffect(() => \{\
    console.error(\
      "404 Error: User attempted to access non-existent route:",\
      location.pathname\
    );\
  \}, [location.pathname]);\
\
  return (\
    <div className="min-h-screen flex items-center justify-center bg-gray-100">\
      <div className="text-center">\
        <h1 className="text-4xl font-bold mb-4">404</h1>\
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>\
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">\
          Return to Home\
        </a>\
      </div>\
    </div>\
  );\
\};\
\
export default NotFound;\
}