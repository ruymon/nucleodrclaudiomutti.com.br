import { Skeleton } from "../primitives/Skeleton";

export function DoctorGreetCardSkeleton() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
      <Skeleton className="w-full h-64 lg:h-auto lg:max-w-sm" />

      <div className="flex-1 flex flex-col gap-8 lg:pb-3">
        <Skeleton className="w-1/6 h-4" />

        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col w-full gap-2">
            <Skeleton className="w-3/6 h-9" />
            <Skeleton className="w-4/6 h-9" />
          </div>

          <div className="xl:max-w-[90%] space-y-2">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>

          <div className="flex items-center gap-3">
            <Skeleton className="w-10 aspect-square" />
            <Skeleton className="w-10 aspect-square" />
            <Skeleton className="w-10 aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
};
