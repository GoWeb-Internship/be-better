# Be-better project

## Work with GitHub

1) Clone yourself dev(main) :
  git clone https://github.com/ToyEye/be-better.git
2) Go to the master branch.
git checkout master
Pick up the latest changes in the master branch.
  git pull origin master
Then create your branch while in the master branch, with the name of your task:
  git checkout -b name_your_branch
3) Work only in your branch, push all changes ONLY to it:
  git add .
  git commit -m “init name_your_branch”
  git push origin name_your_branch
4) When you have completely completed work in your branch and want to add these changes to the general project:
4.1) Move to the master branch
  git checkout master
4.2) Pull out all the changes that others have made
  git pull origin master
4.3) Go to your branch:
  git checkout name_your_branch
5) Merge master) into your branch, resolving conflicts that shouldn't actually exist:
  git merge master
If there are conflicts, we open our code editor and resolve the conflicts that have arisen (in case of difficulties, we turn to the team lead).
  git add .
  git commit -m “write the name of the specific task that we did”
6) Push your branch remotely:
  git push origin name_your_branch
7) Create a pull request to merge with master there on github


## Work with VS Code

You need install dependencies

  `npm i`

Run project

  `npm start`
  
All components create in components folder.
The folder with the component must contain 3 files : Component, Component.module.css and index.js for re-export.
In Coomponent.module.css we use custom classes with @aplly fro TailwiindCss classes
