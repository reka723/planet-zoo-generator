import { PawPrint } from 'lucide-react';

export default function Footer() {
  return <footer>
    <div className="footer-brand"><PawPrint size={16}/> WILDBUILD<span>.</span></div>
    <p>Made for the joy of building little worlds.</p>
    <p className="footer-note">Fan-made companion · Not affiliated with Frontier Developments</p>
  </footer>;
}
