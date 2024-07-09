import React from "react";

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="max-w-3xl mx-auto text-center mt-16">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4 ">
                {title}
            </h1>
            <p className="text-lg text-gray-800 mb-8">{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
