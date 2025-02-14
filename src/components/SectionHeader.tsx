export const SectionHeader = ({
    title,
    eyebrow,
    description,
}:{
    title?:string;
    eyebrow?:string;
    description?:string;
})=> {
    return (
        <>
        <div className="flex justify-center px-6">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center lg:text-2xl">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 px-6">
          {title}
        </h2>
        <p className="text-center sm:px-6 md:px-0 lg:px-0 md:text-lg lg:text-xl text-white/60 mt-6 max-w-md mx-auto">
          {description}
        </p>
        </>
    );
    }