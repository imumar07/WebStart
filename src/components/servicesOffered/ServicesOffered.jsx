import cloud from "../../assets/cloud.png";
import website from "../../assets/website.png";
import socialMedia from "../../assets/social_media.png";

export default function ServicesOffered() {
    const services = [
        {
            title: "Portfolio Making",
            description: "Build a stunning online presence with a personalized portfolio tailored to showcase your skills and achievements.",
            infoPoints: [
                "Custom design & branding",
                "Responsive layouts",
                "SEO optimized"
            ],
            url: website
        },
        {
            title: "Social Media Handling",
            description: "Grow your brand and engage your audience with expert social media management and creative content strategies.",
            infoPoints: [
                "Content creation & scheduling",
                "Analytics & reporting",
                "Audience engagement"
            ],
            url: socialMedia
        },
        {
            title: "Cloud Management",
            description: "Secure, scalable, and efficient cloud solutions to manage your data and applications with ease.",
            infoPoints: [
                "Data backup & recovery",
                "Cost optimization",
                "24/7 monitoring"
            ]
            ,
            url: cloud
        }
    ];

    return (
        <>
            <h2 className="text-3xl font-bold text-center mb-8 text-black my-10">
                🚀 What we offer? 💼
            </h2>
            <div className="container mx-auto my-10 justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                    {services.map((service, idx) => (
                        <div
                            key={service.title}
                            className="bg-white border border-gray-200 rounded-xl p-8 shadow-md text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                        >
                            <div className="flex flex-col items-center mb-2">
                                {/* Example image, replace src with actual relevant image */}
                                <img
                                    src={service.url}
                                    alt={service.title}
                                    className="w-full h-80 object-cover mb-2 border"
                                />
                            </div>
                            <h3 className="text-black text-3xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-4 text-lg">{service.description}</p>
                            
                            <ul className="text-left text-gray-500 text-lg space-y-2">
                                {service.infoPoints.map((point, i) => (
                                    <li key={i}>• {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}