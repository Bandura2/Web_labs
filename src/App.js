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
import MantisPicture1 from "../src/components/img/mantis_1_photo.jpg";
import MantisPicture2 from "../src/components/img/mantis_2_photo.jpg";
import MantisPicture3 from "../src/components/img/mantis_3_photo.png";

const listItems = [
    {
        id: 0,
        title: "Ant1",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        price: 30,
        image: AntPicture1,
        type: "not posioned",
    },{
        id: 1,
        title: "Bee1",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        price: 220,
        image: BeePicture1,
        type: "not posioned",
    },{
        id: 2,
        title: "Mantis1",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        price: 112,
        image: MantisPicture1,
        type: "posioned",
    },{
        id: 3,
        title: "Ant2",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        price: 180,
        image: AntPicture2,
        type: "posioned",
    },{
        id: 4,
        title: "Bee2",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        price: 12,
        image: BeePicture2,
        type: "not posioned",
    },{
        id: 5,
        title: "Mantis2",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        price: 122,
        image: MantisPicture2,
        type: "posioned",
    },{
        id: 6,
        title: "Ant3",
        description: 'Ants are tiny social insects known for their teamwork, communication, and diverse species. They live in complex colonies with roles like workers, soldiers, and a queen. Ants communicate through chemical signals (pheromones) and are skilled foragers.',
        price: 200,
        image: AntPicture3,
        type: "not posioned",
    },{
        id: 7,
        title: "Bee3",
        description: 'Bees are tiny yet vital insects. They tirelessly pollinate flowers, ensuring the growth of fruits and vegetables. Bees live in complex colonies, with a queen, workers, and drones. Theyre famous for honey production and help maintain biodiversity.',
        price: 101,
        image: BeePicture3,
        type: "not posioned",
    },{
        id: 8,
        title: "Mantis3",
        description: 'Mantises are predatory insects known for their unique posture and hunting skills. They have excellent camouflage, rotate their heads for a wide field of vision, and play a crucial role in controlling pests in ecosystems',
        price: 2222,
        image: MantisPicture3,
        type: "posioned",
    }
]

function App() {
  return (<>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home listCards={listItems}/>} />
      <Route path="/catalog" element={<Catalog listItems={listItems}/>}/>
      <Route path="/insect/:insectId" element={<ViewMorePage listItems={listItems}/>}/>
      <Route path="/cart/"/>
    </Routes>
  </Router>
  <Footer />
  </>
  );
}

export default App;