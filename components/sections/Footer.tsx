import { Globe, Share2, Rss, MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-[#1A1A1A] pt-24 pb-8 text-white/80">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div>
            <h3 className="font-serif text-3xl text-white mb-6">Sonría Studio</h3>
            <p className="text-sm mb-6 max-w-xs">
              Clínica dental boutique especializada en odontología digital, estética y restaurativa de alta precisión.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-secondary transition-colors">Nuestra Filosofía</a></li>
              <li><a href="#testimonios" className="hover:text-secondary transition-colors">Testimonios</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Implantes Dentales</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Diseño de Sonrisa</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Ortodoncia Invisible</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blanqueamiento Láser</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Urgencias Dentales</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-serif text-xl text-white mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Av. de la Sonrisa 123, Suite 405<br/>Distrito Financiero, 28001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-secondary shrink-0" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-secondary shrink-0" />
                <span>hola@sonriastudio.com</span>
              </li>
              <li className="flex gap-3 items-start">
                <Clock size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Lun - Vie: 9:00 - 19:00<br/>Sábados: 9:00 - 14:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Sonría Studio. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
