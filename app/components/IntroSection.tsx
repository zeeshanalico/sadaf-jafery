import Image from 'next/image';
import img from './../assets/banner1.jpg';

const IntroSection = () => {
  return (
    <div className="relative ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src='/candle-video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 flex flex-col lg:flex-row lg:items-center lg:space-x-8 gap-10 p-10">
        <div className="lg:w-2/3 flex flex-col justify-center">
          <h2 className="text-white text-3xl font-bold tracking-tight hover:cursor-pointer sm:text-4xl urdu hover:text-red-600 self-end transition-colors duration-300">
            پروفیسر عامل سیدہ صدف جعفری
          </h2>
          <div className="text-white text-base leading-7 mt-12 ">
            <p className="hover:text-gray-100 transition-colors duration-300 urdu text-right">
              علم ایک حقیقت ہے اگر کرنے والا سچا عامل ہو تو . اگر آپ کسی بھی مسلے کا شکار ہیں جیسے من پسند شادی ، والدین کو راضی کرنا ، محبّت میں ناکامی ، شوہر کو راہ راست پر لانا ، شوہر کو ناجائز کاموں سے روکنا ، طلاق کا مسلہ ، تعویذات کی کاٹ ، کالا جادو کا توڑ ، کالا علم کی رکاوٹ ، پسند کا رشتہ ، گھریلو لڑائی جھگڑا ، اولاد کا مسلہ یا جھگڑنا ، محبّت میں ناکامی ، شوہر کو راہ راست پر لانا ، شوہر کو ناجائز کاموں سے روکنا ، طلاق کا مسلہ ، تعویذات کی کاٹ ، کالا جادو کا توڑ ، کالا علم کی رکاوٹ ، پسند کا رشتہ ، گھریلو لڑائی جھگڑا ، اولاد کا مسلہ یا کسی بھی طرح کے مسائل کا شکار ہیں تو فوری پروفیسر عامل سیدہ صدف جعفری سے رابطہ کریں اور ان مسائل کا حل کروائیں ۔
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/3 hidden lg:block order-first lg:pb-8">
          {/* Uncomment this block if you want to use the image */}
          {/* <Image
            src={img}
            alt="Professor"
            className="lg:sticky lg:top-0 mx-auto lg:w-full rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
