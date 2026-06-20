// Carry How This Works content. Loaded before app.js by index.html.
// Keep authored lesson overview copy here so app.js can focus on rendering and interaction.
(function registerCarryHowThisWorksConceptNoticeItems() {
  window.CarryHowThisWorks = window.CarryHowThisWorks || {};
  const api = window.CarryHowThisWorks;

  function conceptNoticeItems(workspace) {
      const specificNotices = {
        "arithmetic.number-sense": [
          "Compare numbers from left to right, starting with the largest place.",
          "Use distance from friendly numbers when a question asks for closest.",
          "A pattern question depends on the repeated change between terms."
        ],
        "arithmetic.integers": [
          "On the number line, greater means farther right.",
          "Adding a positive moves right; subtracting a positive moves left.",
          "For multiplication and division, decide the sign before doing the arithmetic."
        ],
        "arithmetic.fractions": [
          "The denominator names the size of the parts.",
          "Equivalent fractions multiply or divide top and bottom by the same value.",
          "When numerators match, the smaller denominator gives larger pieces."
        ],
        "arithmetic.decimals": [
          "Compare decimals by lining up place values.",
          "Adding a trailing zero can make comparison easier without changing the value.",
          "Tenths and hundredths are place-value names, not separate number systems."
        ],
        "arithmetic.percents": [
          "Percent means out of 100.",
          "Use familiar anchors: 50% is half, 25% is a quarter, 10% is one tenth.",
          "Move between percent, decimal, and fraction forms when one form is easier."
        ],
        "arithmetic.ratios": [
          "A ratio compares two quantities in order.",
          "Equivalent ratios scale both parts by the same factor.",
          "Simplifying a ratio is like simplifying a fraction with two named parts."
        ],
        "arithmetic.factors-multiples-primes": [
          "Factors divide evenly into a number.",
          "Multiples are numbers you land on by repeated multiplication.",
          "Prime means exactly two positive factors: 1 and itself."
        ],
        "arithmetic.order-of-operations": [
          "Parentheses are handled before the rest of the expression.",
          "Multiplication and division come before addition and subtraction.",
          "Operations with the same priority are handled from left to right."
        ],
        "arithmetic.word-problems": [
          "Name what the question asks for before calculating.",
          "Look for action words and structure: more, left, equal groups, each.",
          "Check that the final number has the right unit."
        ],
        "arithmetic.mixed-review": [
          "First decide which operation or method fits the question.",
          "Estimate before exact calculation when numbers are large.",
          "Use the estimate to reject answers that are far too small or too large."
        ],
        "prealgebra.integers": [
          "Separate sign from size: first decide positive or negative, then calculate.",
          "Same signs in multiplication or division give a positive result.",
          "Different signs in multiplication or division give a negative result."
        ],
        "prealgebra.exponents": [
          "The base is the repeated factor.",
          "The exponent counts how many factors there are.",
          "Evaluate powers before ordinary multiplication, addition, or subtraction."
        ],
        "prealgebra.coordinate-plane": [
          "Coordinates are written in x, y order.",
          "The x-coordinate moves horizontally before the y-coordinate moves vertically.",
          "Quadrants are determined by the signs of x and y."
        ],
        "algebra.rational-expressions": [
          "A rational expression is an algebraic fraction.",
          "Factor before canceling so you only cancel common factors.",
          "Excluded values come from the original denominator, even after simplifying."
        ],
        "geometry.coordinate": [
          "Horizontal distance compares x-values.",
          "Vertical distance compares y-values.",
          "Midpoints average the x-values and average the y-values separately."
        ]
      };
      if (specificNotices[workspace.id]) return specificNotices[workspace.id];
    
      if (workspace.topic === "Arithmetic" && workspace.id === "arithmetic.place-value") {
        return [
          "Read the digit and its column together.",
          "A digit in the hundreds column counts hundreds, not ones.",
          "Expanded form is a quick way to check the value of each digit."
        ];
      }
    
      if (workspace.id === "prealgebra.expressions") {
        return [
          "Like terms have the same variable part.",
          "When you combine like terms, add the coefficients and keep the variable part.",
          "Constants do not combine with variable terms."
        ];
      }
    
      if (workspace.id === "algebra.polynomials") {
        return [
          "Polynomial terms are like terms only when the variable and exponent match.",
          "Combine coefficients, not exponents.",
          "A leftover unlike term stays in the expression."
        ];
      }
    
      if (workspace.topic === "Graph Theory") {
        return [
          "Count edges when a question asks for path length.",
          "Count edges touching one vertex when a question asks for degree.",
          "Connectedness asks whether a path exists, not whether the path is short."
        ];
      }
    
      if (workspace.topic === "Probability") {
        return [
          "Name the sample space before counting.",
          "The denominator should match the outcomes still possible.",
          "Conditional information can shrink the sample space."
        ];
      }
    
      if (workspace.topic === "Statistics") {
        const statisticsNotices = {
          "statistics.data-summaries": [
            "First identify the variable and whether it is categorical or quantitative.",
            "Count observations before computing summaries.",
            "Keep units and context with every data summary."
          ],
          "statistics.center-spread": [
            "Mean uses every value, so outliers can pull it.",
            "Median uses ordered position, so it is more resistant.",
            "Spread is separate from center; two data sets can have the same center and different spread."
          ],
          "statistics.displays": [
            "Bar charts compare categories.",
            "Histograms show the shape of quantitative data.",
            "Scatterplots show relationships between two quantitative variables."
          ],
          "statistics.variance-standard-deviation": [
            "Deviations compare each value to the mean.",
            "Variance averages squared deviations.",
            "Standard deviation is in the original units, so it is usually easier to explain."
          ],
          "statistics.normal-distribution": [
            "Normal curves are symmetric around the mean.",
            "Standard deviation controls how wide the curve is.",
            "z-scores measure distance from the mean in standard deviations."
          ],
          "statistics.binomial-distribution": [
            "A binomial model counts successes.",
            "The number of trials is fixed before observing the data.",
            "The success probability stays the same for each trial."
          ],
          "statistics.correlation-regression": [
            "Correlation describes linear direction and strength.",
            "Regression gives a line for summarizing or predicting.",
            "Association alone does not prove cause."
          ],
          "statistics.confidence-intervals": [
            "An interval has a lower endpoint and an upper endpoint.",
            "The margin of error extends both directions from the estimate.",
            "Higher confidence usually means a wider interval."
          ],
          "statistics.sampling-inference": [
            "Samples describe observed data; populations are what you want to learn about.",
            "Random sampling reduces selection bias.",
            "Larger random samples usually make estimates more stable, but uncertainty never disappears completely."
          ]
        };
        return statisticsNotices[workspace.id] || [
          "Identify the data, the summary, and the context.",
          "Choose a display or statistic that matches the question.",
          "Remember that sample results still carry uncertainty."
        ];
      }
    
      if (String(workspace.id || "").startsWith("physics.")) {
        return [
          "Keep units upright and attached to the quantity.",
          "Use the diagram to identify what the symbols mean before calculating.",
          "Direction matters for vectors, forces, momentum, and fields."
        ];
      }
    
      if (workspace.topic === "Proofs") {
        return [
          "Separate the claim from the reason.",
          "Universal claims need all cases; existence claims need one working case.",
          "A counterexample must satisfy the setup and break the conclusion."
        ];
      }
    
      if (workspace.topic === "Set Theory") {
        return [
          "Membership is about one object.",
          "Subset is about every element of one set being inside another set.",
          "Union means either set; intersection means both sets."
        ];
      }
    
      if (workspace.topic === "Number Theory") {
        return [
          "Divisibility means no remainder.",
          "Modular arithmetic keeps the remainder and ignores completed groups.",
          "Congruent numbers have the same remainder in the chosen modulus."
        ];
      }
    
      if (workspace.topic === "Real Analysis") {
        return [
          "Definitions are the main object of study.",
          "Look for what happens arbitrarily close to a value.",
          "Examples test a definition; counterexamples find its boundary."
        ];
      }
    
      if (workspace.topic === "Complex Analysis") {
        return [
          "Keep real-variable intuition nearby, but do not assume it transfers unchanged.",
          "Watch whether a claim is local near one point or global on a region.",
          "Singularities are not just errors; they often carry the main information."
        ];
      }
    
      if (workspace.topic === "Topology") {
        return [
          "First identify the space, then the sets being treated as open.",
          "A topological statement often depends on the surrounding space.",
          "For yes-or-no questions, test the definition instead of relying on a picture."
        ];
      }
    
      if (workspace.topic === "Abstract Algebra") {
        return [
          "Identify the set and operation before checking a structure.",
          "A definition usually has several required rules.",
          "One failed rule is enough to reject the structure."
        ];
      }
    
      return api.conceptWhyItems?.(workspace) || [];
    }

  api.conceptNoticeItems = conceptNoticeItems;
})();
