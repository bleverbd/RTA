import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";


interface MainContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  isSmall: boolean;
  setIsSmall: React.Dispatch<React.SetStateAction<boolean>>;
}



const MainContext = createContext<MainContextType | null>(null);

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmall(window.innerWidth < 768 ? true : false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <MainContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        isSmall,
        setIsSmall,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useStateContext must be used inside MainContextProvider");
  }
  return context;
};

export { MainContextProvider, useMainContext };
