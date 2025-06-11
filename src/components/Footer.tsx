import { Linkedin } from 'lucide-react'
import { SiTelegram, SiWhatsapp, SiTeamspeak } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
          <div className="text-center">2025 HWRJ All rights are reserved</div>
          <ul className='flex justify-center gap-4 text-xl'>
            <li><Linkedin className="w-5 h-5 hover:text-white transition-colors" /></li>
            <li><SiTelegram className="hover:text-white transition-colors" /></li>
            <li><SiWhatsapp className="hover:text-white transition-colors" /></li>
            <li><SiTeamspeak className="hover:text-white transition-colors" /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};
