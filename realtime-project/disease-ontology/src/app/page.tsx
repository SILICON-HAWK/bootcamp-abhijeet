import DiseaseExplorer from './components/DiseaseExplorer';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Disease Ontology Explorer</h1>
      <DiseaseExplorer />
    </div>
  );
};

export default HomePage;
