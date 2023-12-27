"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const LandingContentPage = () => {
  const services = [
    {
      name: "Developments",
      title: "Web Application and Website",
      avatar: "WA",
      desc: "From start to complete"
    },
    {
      name: "Domain Name",
      title: "Domain registration",
      avatar: "WA",
      desc: "Domain name, Name server, DNS Record, Privacy service"
    },
    {
      name: "Hosting",
      title: "VPS, Share Hosting",
      avatar: "WA",
      desc: ""
    },
    {
      name: "Maintenance Service",
      title: "Yearly Service",
      avatar: "WA",
      desc: "From start to complete"
    },
  ]

  return (
    <div className="px-10 pt-20 pb-20 bg-slate-800">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service,index) => (
          <Card key={index} className="bg-slate-900 border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">
                    {service.name}
                  </p>
                  <p className="text-zinc-400 text-sm">
                    {service.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {service.desc}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>   
  )
}

export default LandingContentPage