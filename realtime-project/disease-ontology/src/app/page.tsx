import DiseaseExplorer from './components/DiseaseExplorer';
const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="lg:text-5xl font-bold mb-4 md:text-3xl sm:text-xl">Disease Ontology Explorer</h1>
      <DiseaseExplorer />
    </div>
  );
};

export default HomePage;
