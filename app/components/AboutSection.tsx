import React from 'react';

const AboutSection = () => {
  return (
    <div className="py-12 bg-red-600 text-right urdu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-100 mb-4 text-center py-2 text-3xl font-bold tracking-tight sm:text-4xl">ہمارے بارے میں</h2>
        <div className="text-white p-6">
          <h3 className="text-2xl font-bold mb-2 py-2">ہمارا مشن</h3>
          <p className="mb-4">
            ہم استخارا ، ٹیرو، شماریات اور علم نجوم کے ذریعے زندگی کے اسرار کو روشن کرنے کی کوشش کرتے ہیں۔ ہمارا مشن افراد کو علم کے ساتھ بااختیار بنانا، ترقی کو فروغ دینا اور خود دریافت کرنا ہے۔
          </p>
          <h3 className="text-2xl font-bold mb-2 py-2">ہماری قدرتیں</h3>
          <ul className="list-disc list-inside">
            <li className="mb-2"><strong>ایمانداری:</strong> ہم بلند ترین امانت اور اخلاقی کارروائی کے معیاروں کا پاس رکھتے ہیں۔</li>
            <li className="mb-2"><strong>صارف کنوں کے مرکز پر توجہ:</strong> ہمارے صارفین ہماری ہر کام کی دل کی بات ہیں۔</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
