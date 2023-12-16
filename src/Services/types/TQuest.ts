export type TQuest = {
  questName: string;
  conditions: condition[];
  bonusText: () => string;
  bonus: Function;
  timeLeftToWork: number;
  workInterval: number;
  conditionHidden: () => boolean;
};

export type condition = {
  conditionText: string;
  condition: boolean;
};
