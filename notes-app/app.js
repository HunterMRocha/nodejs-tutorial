import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import notes from "./notes.js";

const log = (message) => console.log(chalk.bold.green(message));
const warn = (message) => console.log(chalk.yellow(message));
const err = (message) => console.log(chalk.red(message));
 
/* Helper function for yargs */
const yargsNew = (command) => yargs(hideBin(process.argv)).command(command).demandCommand(1).argv;
 
/* Creates add command */
yargsNew({
  command: "add",
  describe: "Add a new note",
  builder: {
	title: {
		describe: 'Note title',
		demandOption: true, 
		type: 'string'
	},
	body: {
		describe: 'Note Body', 
		demandOption: true, 
		type: 'string'
	}
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  },
});
 
/* Creates remove command */
yargsNew({
  command: "remove",
  describe: "Remove a note",
  builder: {
	  title: {
		  describe: 'Note title', 
		  demandOption: true, 
		  type: 'string'
	  },
  },
  handler: function (argv) {	
	notes.removeNote(argv.title)
  },
});
 
/* Creates the read command */
yargsNew({
  command: "read",
  describe: "Reads a note",
  handler: function () {
    log("Reading a note......");
  },
});
 
/* Creates the list command */
yargsNew({
  command: "list",
  describe: "Lists all saved notes",
  handler: function () {
    log("Listing all notes - Note 1 - Note 2");
  },
});

