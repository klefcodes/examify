const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const indexRouter = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/", indexRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
