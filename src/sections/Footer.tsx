import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerlinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/debasish-panigrahi79/",
  },
  {
    title: "Email",
    href: "mailto:debasishpanigrahi297@gmail.com",
  },
  {
    title: "Github",
    href: "https://github.com/debapani297",
  },
  {
    title: "Other Relevant Documents",
    href: "https://drive.google.com/file/d/1yN6XLPCdoxd3kRVJIxjUwKOi2KQ49R15/view?usp=sharing",
  }
];

export const Footer = () => {
  return <footer>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:text-base lg:text-base md:flex-row lg:flex-row'>
      <div className='text-white/40'>&copy; 2025. All Rights Reserved.</div>
      <nav className='flex flex-col md:flex-row lg:flex-row items-center gap-8'>
        {footerlinks.map((link) => (          
          <a key={link.title} href='#' className='inline-flex items-center md:text-base lg:text-base gap-1.5 text-white/60 hover:text-white/100'>
            <span className='font-semibold'>{link.title}</span>
            <ArrowUpRightIcon className='size-4' />
          </a>
        ))}
      </nav>
      </div>
    </div>
  </footer>;
};
