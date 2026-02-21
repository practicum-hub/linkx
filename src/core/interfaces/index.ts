export type ISection = {
  name: string;
  topics: { text: string }[];
  description?: string;
  estimatedTime?: string;
};

export type ILevel = {
  name: string;
  description: string;
  sections: ISection[];
};

export type ILesson = {
  id: number;
  name: string;
  units: IUnit[];
  exercises?: IExercise[];
};

export type IExercise = {
  id: number;
  text: string;
  interactive?: boolean;
};

export type IUnit = {
  id: number;
  name: string;
  exercises?: IExercise[];
};
