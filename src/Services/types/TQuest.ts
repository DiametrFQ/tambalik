export interface TextReward {
  reward: string;
  directory: string;
}

export type TQuest = {
  questName: string;
  conditions: condition[];
  bonusText: () => TextReward[];
  bonus: Function;
  timeLeftToWork: number;
  workInterval: number;
  conditionHidden: () => boolean;
  state: boolean;
};

export type condition = {
  conditionText: string;
  condition: boolean;
};
