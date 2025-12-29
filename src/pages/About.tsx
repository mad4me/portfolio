import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';
import { SkillCard } from '../components/SkillCard';
import { CommonCard } from '../components/CommonCard';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = '';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6 max-w-[80ch] justify-center"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="Sobre mim"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Olá, sou o Romão!</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        Sempre gostei de fazer algo novo e construir soluções que consigam
        corrigir problemas ou facilitar tarefas que realizo. Esse interesse me
        levou à programação, onde busco constantemente utilizar e testar as
        minhas habilidades e conhecimentos e aprender algo novo.
      </p>
      <h2 className="font-semibold">Competências Pessoais</h2>
      <p>
        Sou um perfeccionista, procuro sempre a melhor solução para os
        problemas que enfrento. Para mim, cada detalhe importa. Além
        disso, a minha curiosidade me faz pesquisar e aprender
        continuamente. Gosto de explorar novos conceitos e tecnologias
        de forma independente, sempre em busca de enriquecer os meus
        conhecimentos e me atualizar nas melhores práticas do setor.
      </p>
      <h2 className="font-semibold">Competências Técnicas</h2>
      <div className='flex flex-row gap-4 flex-wrap'> 
        <SkillCard label='Java' icon="" />
        <SkillCard label='PHP' icon="" />
        <SkillCard label='Node.js' icon="" />
        <SkillCard label='React' icon="" />
        <SkillCard label='Laravel' icon="" />
        <SkillCard label='Python' icon="" />
        <SkillCard label='MySQL' icon="" />
        <SkillCard label='Firebase' icon="" />
      </div>
      
      <h2 className="font-semibold">Educação</h2>
      <CommonCard startDate='set. 2025' endDate='ainda a estudar' name='Superior Programação de Sistemas de Informação' location='' duration='1 mês' image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.QrODaG_xhxxo-DnT1cqMlQHaCx%3Fpid%3DApi&f=1&ipt=a52bc47171d97ee8ada5b4d8291d45c1e1202af43831fefd4676131a99206e0a&ipo=images' position='ESTGA - Universidade de Aveiro' id={1} />
      <CommonCard startDate='set. 2022' endDate='jul. 2025' location='' name='Professional Técnico Informática e sistemas ' duration='3 anos' image='' position='Escola Secundária Marques de Castilho' id={2} />
      <h2 className="font-semibold">Experiência</h2>
      <CommonCard startDate='jun. 2025' endDate='jul. 2025' name='Indústrias Metalúrgicas, S.A.' location='Rua do Grou nº 1378 - Ap. 2' duration='1 mês' image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faluminium-stewardship.org%2Fwp-content%2Fuploads%2F2023%2F12%2FGDV3LB_Ciclo.png&f=1&nofb=1&ipt=05bed82031ba8d78fac047fd9e877c019824a3b8a1f1dc7172a6acf72b657993' position='Ciclo Fapril' id={1} />
      <CommonCard startDate='mai. 2024' endDate='jul. 2024' name='Indústrias Metalúrgicas, S.A.' location='Rua do Grou nº 1378 - Ap. 2' duration='1 mês e meio' image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faluminium-stewardship.org%2Fwp-content%2Fuploads%2F2023%2F12%2FGDV3LB_Ciclo.png&f=1&nofb=1&ipt=05bed82031ba8d78fac047fd9e877c019824a3b8a1f1dc7172a6acf72b657993' position='Ciclo Fapril' id={2} />


      

  
    </motion.section>
  );
};
