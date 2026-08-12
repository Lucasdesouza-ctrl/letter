import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Introduction } from './introduction/introduction';
import { Question } from './question/question';
import { Final } from './final/final';

export const routes: Routes = [ {
    path: '',
    component: Home
  },
  {
    path: 'introduction',
    component: Introduction
  },
  {
    path: 'question',
    component: Question
  },
  {
    path: 'final',
    component: Final
  }];
