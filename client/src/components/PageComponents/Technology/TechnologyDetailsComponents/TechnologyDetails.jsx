import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTechnology } from "@/features/technology/technologySlice";

import TechnologyBanner from "./TechnologyBanner";
import TechnologyDescription from "./TechnologyDescription";
import TechnologyPoints from "./TechnologyPoints";
import { TechnologySkeleton } from "../TechnologySkeleton";

const TechnologyDetails = () => {
  const { techId } = useParams();
  const dispatch = useDispatch();

  const { current, loading, error } = useSelector((state) => state.technology);

useEffect(() => {
  if (!techId) return;
  if (!current || current.slug !== techId) {
    dispatch(getTechnology(techId));
  }
}, [techId, dispatch]);

  useEffect(() => {
    if (current?.title) {
      document.title = `${current.title} | Technologies`;
    }
  }, [current]);



  if (loading) return <TechnologySkeleton />;
  if (error) return <div className="text-center py-20">{error}</div>;
  if (!current) return null;
    if (!loading && !current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Technology not found</p>
      </div>
    );
  }

  return (
    <div>
      <TechnologyBanner name={current.title} banner={current.banner} />

      <div className="flex flex-col my-[5%] mx-3 md:mx-[10%]">
        <TechnologyDescription
          title={current.description.highlightTitle}
          paragraphs={current.description.paragraphs}
        />

        <div className="w-[95%] h-[1.5px] mt-[5%] md:my-[2.5%] mx-auto bg-gray-300" />

        <div className="w-full">
          <TechnologyPoints points={current.points} />
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetails;
