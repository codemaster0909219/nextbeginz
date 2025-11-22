import { Linkedin } from 'lucide-react'
import { SiTelegram, SiWhatsapp, SiTeamspeak } from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
          <div className="text-center">2025 Nextbegin — Engineering Intelligence. All rights reserved</div>
          
          <ul className='flex justify-center gap-4 text-xl'>

            {/* LinkedIn */}
            <li>
              <a 
                href="https://www.linkedin.com/company/nextbeginz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </li>

            {/* Telegram */}
            <li>
              <a 
                href="https://t.me/nextbegin"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a 
                href="https://wa.me/12394504113" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </li>

            {/* Teamspeak — replace with your server */}
            {/* <li>
              <a 
                href="ts3server://YOUR_TEAMSPEAK_SERVER_ADDRESS"
                className="hover:text-white transition-colors"
              >
                <SiTeamspeak className="w-5 h-5" />
              </a>
            </li> */}

          </ul>
        </div>
      </div>
    </footer>
  )
}
