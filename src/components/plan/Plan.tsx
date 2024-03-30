import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Plan = () => {
  return (
    <section>
      <div className="max-w-7xl m-auto py-16 px-4">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center">
          <div className="w-full md:w-1/2 ">
            <h2 className="text-3xl font-black m-auto max-w-sm text-center">
              Nuestro Plan de Trabajo
            </h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Tabs
              defaultValue="paso1"
              className="max-w-xl"
            >
              <TabsList className="flex space-x-2">
                <TabsTrigger value="paso1">Paso 1</TabsTrigger>
                <TabsTrigger value="paso2">Paso 2</TabsTrigger>
                <TabsTrigger value="paso3">Paso 3</TabsTrigger>
                <TabsTrigger value="paso4">Paso 4</TabsTrigger>
              </TabsList>
              <TabsContent value="paso1">
                <Image
                  src="/paso1.svg"
                  alt="step-one-image"
                  width={380}
                  height={380}
                ></Image>
              </TabsContent>
              <TabsContent value="paso2">
                <Image
                  src="/paso2.svg"
                  alt="step-one-image"
                  width={380}
                  height={380}
                ></Image>
              </TabsContent>
              <TabsContent value="paso3">
                <Image
                  src="/paso3.svg"
                  alt="step-one-image"
                  width={380}
                  height={380}
                ></Image>
              </TabsContent>
              <TabsContent value="paso4">
                <Image
                  src="/paso4.svg"
                  alt="step-one-image"
                  width={380}
                  height={380}
                ></Image>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Plan;
