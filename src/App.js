import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import ViewMorePage from './components/ViewMorePage/ViewMorePage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import AntPicture1 from "../src/components/img/ant_1_photo.png";
import AntPicture2 from "../src/components/img/ant_2_photo.png";
import AntPicture3 from "../src/components/img/ant_3_photo.png";
import BeePicture1 from "../src/components/img/bee_1_photo.png";
import BeePicture2 from "../src/components/img/bee_2_photo.png";
import BeePicture3 from "../src/components/img/bee_3_photo.png";
import MantisPicture1 from "../src/components/img/mantis_1_photo.png";
import MantisPicture2 from "../src/components/img/mantis_2_photo.png";
import MantisPicture3 from "../src/components/img/mantis_3_photo.png";

const listItems = [
    {
        title: "Ant1",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        image: AntPicture1,
    },{
        title: "Bee1",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        image: BeePicture1,
    },{
        title: "Mantis1",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        image: MantisPicture1,
    },{
        title: "Ant2",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        image: AntPicture2,
    },{
        title: "Bee2",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        image: BeePicture2,
    },{
        title: "Mantis2",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        image: MantisPicture2,
    },{
        title: "Ant3",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        image: AntPicture3,
    },{
        title: "Bee3",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        image: BeePicture3,
    },{
        title: "Mantis3",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        image: MantisPicture3,
    }
]

function App() {
  return (<>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home listCards={listItems}/>} />
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/insect/:insectId" element={<ViewMorePage/>}/>
      <Route path="/cart/"/>
    </Routes>
  </Router>
  <Footer />
  </>
  );
}

export default App;