
import Accordion from './Accordion';
import Copyright from './Copyright';
import Currency from './Currency';
import FooterMenu from './FooterMenu';
import accordionItems from '../../../data/AccordionItems.json'


const Footer = () => {
  return <footer className='bg-black text-stone-200'>
    <Accordion items={accordionItems} />
    <FooterMenu />
    <Currency />
    <Copyright />

  </footer>
}
export default Footer